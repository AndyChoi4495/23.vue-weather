const withComputed = {
  computed: {
    style: function () {
      if (this.styled) {
        return `
          font-size: ${this.styled.size || 'inherit'};
          color: ${this.styled.color || 'inherit'};`
      } else {
        return ''
      }
    }
  }
}

const withIconComputed = {
  computed: {
    style: function () {
      if (this.styled && this.styled.width) {
        return `width: ${this.styled.width};`
      } else {
        return 'width: 120px;'
      }
    }
  }
}

export { withComputed, withIconComputed }
