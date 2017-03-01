var app = new Vue({
  el: '.container',
  data() {
    return {
      addressList: [
        {
          "addressId":"100001",
          "userName":"JackBean",
          "streetName":"北京市朝阳区朝阳公园",
          "postCode":"100001",
          "tel":"12345678901",
          "isDefault":true
        },
        {
          "addressId":"100002",
          "userName":"JackBean",
          "streetName":"北京市朝阳区朝阳公园",
          "postCode":"100001",
          "tel":"12345678901",
          "isDefault":false
        },
        {
          "addressId":"100003",
          "userName":"JackBean",
          "streetName":"北京市朝阳区朝阳公园",
          "postCode":"100001",
          "tel":"12345678901",
          "isDefault":false
        },
        {
          "addressId":"100004",
          "userName":"JackBean",
          "streetName":"北京市朝阳区朝阳公园",
          "postCode":"100001",
          "tel":"12345678901",
          "isDefault":false
        },
        {
          "addressId":"100005",
          "userName":"JackBean",
          "streetName":"北京市朝阳区朝阳公园",
          "postCode":"100001",
          "tel":"12345678901",
          "isDefault":false
        }
      ],
      current: 0,
      limitNum: 3,
      loadStatus: false,
      shipping: 1,
      currentDelItem: {}
    }
  },
  computed: {
    filterAddr() {
      return this.addressList.slice(0, this.limitNum)
    }
  },
  methods: {
    setIsDefalut(itemId) {
      this.addressList.forEach((item) => {
        if (item.addressId === itemId) {
          item.isDefault = true
        } else {
          item.isDefault = false
        }
      })
    },
    loadMore() {
      this.loadStatus = !this.loadStatus
      if (this.loadStatus) {
        this.limitNum = this.addressList.length
      } else {
        this.limitNum = 3
      }
    },
    del(item) {
      this.currentDelItem = item
      this.addressList.splice(this.currentDelItem, 1)
    }
  }
})
