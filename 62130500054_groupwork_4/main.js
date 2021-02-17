const app = {
  data() {
    return {
      galleries: [
        {
          title: "Car",
          images:
            "https://images.unsplash.com/photo-1612882835995-1b3af9a52d5b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1",
          author_name: "Simon Lohmann",
          heart: false,
        },
        {
          title: "Women",
          images:
            "https://images.unsplash.com/photo-1612830079777-54121ec93c40?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1",
          author_name: "Harry Peters",
          heart: false,
        },
        {
          title: "XPS",
          images:
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1",
          author_name: "Designed to be the best",
          heart: false,
        },
        {
          title: "Women Buetiful",
          images:
            "https://images.unsplash.com/photo-1612834484807-31997b8d4441?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1",
          author_name: "Liz Fitch",
          heart: false,
        },
      ],
      form: {
        text: "",
        search: false,
      },
    };
  },
  methods: {
    Like(index) {
      this.galleries[index].heart = !this.galleries[index].heart;
    },
    search() {
      this.form.search = !this.form.search;
    },
  },
  computed: {
    countLike() {
      return this.galleries.filter((i) => i.heart).length;
    },
    searching() {
      return this.galleries.filter((member) => {
        return member.title.toLowerCase().includes(this.form.text.toLowerCase());
      });
    },
  },
};

Vue.createApp(app).mount("#app");
