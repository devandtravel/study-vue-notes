const App = {
  data() {
    return {
      placeholderString: 'Note title (less than 15 symbols)',
      title: 'Notes list',
      inputValue: '',
      notes: ['note 1', 'note 2', 'note 3', 'note 4', 'note 5']
    }
  },
  methods: {
    addNote() {
      trimmedInputValue = this.inputValue.trim()
      if (trimmedInputValue) {
        this.notes.push(trimmedInputValue)
        this.inputValue = ''
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
    }
  },
  computed: {},
  watch: {
    inputValue(value) {
      if (value.length > 15) {
        oldInputValue = this.inputValue
        this.inputValue = 'too long input string'
      }
    }
  }
}

Vue.createApp(App).mount('#app')
 