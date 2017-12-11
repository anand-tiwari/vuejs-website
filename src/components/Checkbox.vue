<template>
      <div class="a-checkbox">
        <label>
          <input type="checkbox" :value="value" ref="chk" :checked="brands" @change="change">
          <span>
            <span>{{label}}</span>
          </span>
        </label>
      </div>
</template>

<script>
  export default {
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      // this allows using the `value` prop for a different purpose
      brands: Array,
      value: String,
      label: String
    },
    data () {
      return {
      }
    },
    methods: {
      change () {
        this.$emit('change', event.target.checked ? this.$refs.chk.value : '')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
