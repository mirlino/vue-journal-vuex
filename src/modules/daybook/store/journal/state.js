export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), // 1237129317892
      date: new Date().toDateString(), // sat 23, Octuber
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid voluptas esse eaque atque aspernatur? Fugit labore tenetur ab ad magnam, tempore temporibus nostrum incidunt aliquid similique sint quia vero blanditiis provident beatae velit qui repudiandae enim assumenda odio! Deserunt, minus distinctio. Impedit recusandae inventore nulla. Magnam, accusantium? Optio, ex.',
      picture: null, // https://imagen
    },
    {
      id: new Date().getTime() + 1000, // 1237129317892
      date: new Date().toDateString(), // sat 23, Octuber
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid voluptas esse eaque atque aspernatur? Fugit labore tenetur ab ad magnam.',
      picture: null, // https://imagen
    },
    {
      id: new Date().getTime() + 2000, // 1237129317892
      date: new Date().toDateString(), // sat 23, Octuber
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid voluptas esse eaque atque aspernatur? Fugit labore tenetur ab ad magnam, tempore temporibus nostrum incidunt aliquid similique sint quia vero blanditiis provident beatae velit qui repudiandae enim assumenda odio! Deserunt, minus distinctio.',
      picture: null, // https://imagen
    }
  ]
})