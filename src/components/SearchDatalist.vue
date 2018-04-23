<script>
export default {
  name: "SearchDatalist",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      emails: [
        {
          id: "7c6aa659-2ef8-4a5d-82f7-714313750552",
          firstName: "Adore",
          lastName: "Ayshford",
          email: "aayshford2z@prnewswire.com"
        },
        {
          id: "9c1d0d09-0af4-4c41-a0b4-c789cf5dabb8",
          firstName: "Ashely",
          lastName: "Ashfield",
          email: "aashfieldeo@yahoo.com"
        },
        {
          id: "0aeba039-deda-4fbe-a1d5-108932b1c0a7",
          firstName: "Alard",
          lastName: "Arndt",
          email: "aarndtha@moonfruit.com"
        },
        {
          id: "6eac8f2b-7c27-4457-9c55-e867b754141e",
          firstName: "Camilla",
          lastName: "Armin",
          email: "carmindb@jimdo.com"
        },
        {
          id: "75060aa7-9862-4b0f-ae15-3f21c88583f7",
          firstName: "Ardath",
          lastName: "Rawlyns",
          email: "arawlynsl@cisco.com"
        },
        {
          id: "e6e8187b-72b4-4af0-9010-d138761da274",
          firstName: "Anneliese",
          lastName: "Cranson",
          email: "acransonz@netlog.com"
        },
        {
          id: "3c83f086-2c50-46ff-9c06-a7d031b8c447",
          firstName: "Joyan",
          lastName: "Adrien",
          email: "jadrien13@hubpages.com"
        },
        {
          id: "ccc428cb-0015-486d-afc6-a7635a014e20",
          firstName: "Ardyth",
          lastName: "Gurg",
          email: "agurg18@theatlantic.com"
        },
        {
          id: "1270353f-7c28-498e-b307-cba939b5a1d6",
          firstName: "Diena",
          lastName: "Allender",
          email: "dallender1x@bandcamp.com"
        },
        {
          id: "e7c2bf80-b36c-433e-bcf6-17bcb680ac02",
          firstName: "Alasteir",
          lastName: "Bampford",
          email: "abampford22@umn.edu"
        },
        {
          id: "47807023-baf7-45b7-88de-2478fd13c0c0",
          firstName: "Pieter",
          lastName: "Algar",
          email: "palgar2a@cloudflare.com"
        }
      ]
    };
  }
};
</script>
<template>
    <datalist :id="id">
    <option v-for="human in emails" 
        :key="human.id" 
        :value="human.email">{{ human.firstName }} {{ human.lastName }}</option>
    </datalist> 
</template>
