import axios from 'axios';
import isURL from 'validator/es/lib/isURL';

import Echo from 'laravel-echo'
import pusher from 'pusher-js';

export const auditMixin = {
  created() {
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: this.pusherKey,
      cluster: 'us3',
      forceTLS: false
    });
  },
  data() {
    return {
      audit: null,
      echo: null,
      error: null,
      isLoading: false,
      results: null,
      token: null,
      url: ''
    };
  },
  methods: {
    createAudit(type = 'url') {
      if (this.validate(type)) {
        this.audit = null;
        this.isLoading = true;
        this.error = null;

        if (this.token) {
          this.leaveChannel(`audit-${this.token}`);
        }
        this.token = generateHex();

        this.joinChannel(`audit-${this.token}`);

        axios
          .post(`/api/audit/create${process.env.NODE_ENV === 'development' ? '?XDEBUG_SESSION_START=1' : ''}`, {
            site_id: type === 'site' && this.selectedSite ? this.selectedSite.id : null,
            token: this.token,
            url: this.url
          });

        this.results = null;
        this.url = '';
      }
    },
    joinChannel(channelId) {
      const channel = this.echo.channel(channelId);

      channel.listen('.AuditCompleted', async ({ audit }) => {
        this.audit = audit;
        const response = await axios.get(`/api/audit/${audit.id}${process.env.NODE_ENV === 'development' ? '?XDEBUG_SESSION_START=1' : ''}`);

        this.results = response.data.data.results;
        this.isLoading = false;
      });

      channel.listen('.AuditFailed', async ({ audit, error }) => {
        this.error = error;
        if (error.includes('Failed to finish task')) {
          this.error = 'Unable to complete the requested audit.  Please ensure the requested URL is publicly accessible.'
        }
        this.isLoading = false;
      });
    },
    leaveChannel(channelId) {
      this.echo.leaveChannel(channelId);
    },
    validate(type = 'url') {
      if (type === 'site') {
        if (!this.selectedSiteId) {
          this.error = 'Please select a site to audit.';
          return false;
        }
        this.selectedSite = this.sites.find(
          site => site.id === this.selectedSiteId
        );
        this.url = this.selectedSite.domain;
        return true;
      } else {
        if (!isURL(this.url)) {
          this.error = 'Please enter a valid URL or domain.';
          return false;
        }
        return true;
      }
    }
  },
  props: {
    pusherKey: String
  }
};
