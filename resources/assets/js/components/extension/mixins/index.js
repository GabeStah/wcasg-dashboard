import lzString from 'lz-string';

export const extensionMixin = {
  data() {
    return {
      error: null,
      isLoading: false,
      results: null,
      token: null
    };
  },
  methods: {
    compress(value) {
      return lzString.compressToBase64(value);
    },
    decompress(value) {
      return lzString.decompressFromBase64(value);
    },
    url() {
      return `/api/extension${ this.isAdmin ? '/admin' : '' }?XDEBUG_SESSION_START=1`
    },
    reset() {
      this.error = null;
      this.isLoading = false;
      this.results = null;
    },
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
