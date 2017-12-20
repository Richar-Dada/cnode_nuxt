<template>
  <div>
    <mu-appbar title="Cnode" class="title">
      <mu-icon-button icon="menu" slot="left" @click="toggle()"/>
      <mu-flat-button label="expand_more" slot="right"/>
    </mu-appbar>
    <mu-drawer :open="open" :docked="false" @close="toggle()">
      <mu-list @itemClick="toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
      </mu-list>
    </mu-drawer>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyFooter
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
    }
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  background-color: #444;
}
</style>
