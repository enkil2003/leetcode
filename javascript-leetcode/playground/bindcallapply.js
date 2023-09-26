const book = {
  title: "The neverending story",
  author: "Michael Ende",
};
const book2 = {
  title: "The neverending story 2",
  author: "Michael Ende",
};

function logBookInfo(year, movie) {
  console.log(
    `Book name ${this.title}, author ${this.author}, published ${year} and movie ${movie}`
  );
}

const bookInfo = logBookInfo.bind(book);
const bookInfo2 = logBookInfo.bind(book2);
// bookInfo();

bookInfo(111, 222);
bookInfo2(999, 888);
