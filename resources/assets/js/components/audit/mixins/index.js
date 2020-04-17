import axios from 'axios';
import isURL from 'validator/es/lib/isURL';

export const auditMixin = {
  data() {
    return {
      audit: null,
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
          .post(`/api/audit/create?XDEBUG_SESSION_START=1`, {
            site_id: type === 'site' && this.selectedSite ? this.selectedSite.id : null,
            token: this.token,
            url: this.url
          });

        this.results = null;
        this.url = '';
      }
    },
    joinChannel(channelId) {
      const channel = Echo.channel(channelId);

      channel.listen('.AuditCompleted', async ({ audit }) => {
        this.audit = audit;
        const response = await axios.get(`/api/audit/${audit.id}`);

        this.results = response.data.data.results;
        this.isLoading = false;
      });

      channel.listen('.AuditFailed', async ({ audit, error }) => {
        this.error = error;
        this.isLoading = false;
      });
    },
    leaveChannel(channelId) {
      Echo.leaveChannel(channelId);
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
        return true;
      } else {
        if (!isURL(this.url)) {
          this.error = 'Please enter a valid URL or domain.';
          return false;
        }
        return true;
      }
    }
  }
};
