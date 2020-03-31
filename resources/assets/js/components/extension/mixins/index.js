import axios from 'axios';
import isURL from 'validator/es/lib/isURL';
import lzString from 'lz-string';

export const extensionMixin = {
  data() {
    return {
      error: null,
      isLoading: false,
      results: null,
      token: null,
      url: ''
    };
  },
  methods: {
    compress(value) {
      return lzString.compressToBase64(value);
    },
    decompress(value) {
      return lzString.decompressFromBase64(value);
    },
    reset() {
      this.error = null;
      this.isLoading = false;
      this.results = null;
    },
  }
};
