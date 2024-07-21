<template>
  <div id="app">
    <button @click="connectToSubstrate">Connect to Substrate</button>
    <div v-if="blockNumber">Latest Block: {{ blockNumber }}</div>
  </div>
</template>

<script>
import { connect, getApi } from './services/substrate';

export default {
  data() {
    return {
      blockNumber: null,
    };
  },
  methods: {
    async connectToSubstrate() {
      try {
        const api = await connect();
        const latestHeader = await api.rpc.chain.getHeader();
        this.blockNumber = latestHeader.number.toNumber();
      } catch (error) {
        console.error('Error connecting to Substrate:', error);
      }
    },
  },
};
</script>
