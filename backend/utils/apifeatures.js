class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    // ! for category
    // Create copy of this.queryStr so our original queryStr don't get manipulated

    // const queryCopy = this.queryStr
    // ? Doing like this will change the actual value of our queryStr as in javascript objects are passed by referece so changes in queryCopy will be happening on queryStr also to avoid this use --
    const queryCopy = {...this.queryStr}
    //   Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);
    // by doing so if our queryCopy container any of the fields from removeFields array it will remove it
    // console.log(qeuryCopy)
    // ! Filter for Price and Rating
    // console.log(qeuryCopy)
    // price[gt] and price[lt] as kelyane aplyala price range milun jate but mongodb mdhe operators $ ne start hotat mhnun tyasathi :-  
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    // ? `/\b(gt|gte|lt|lte)\b/`is regular expression which search for the given words and replace their starting with $ sign so it will become our mongodb operator

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    // 50 products 10 products per page
    // 1st page vrti first 10 products
    // 2nd page vrti next 10 products starting from 11 so skip 10
    // 3rd page vrti next 10 products starting from 21 so skip 20
    // 4th page vrti next 10 products starting from 31 so skip 30

    // so Login is number of products to be skipped = resultPerpage * (currentPage - 1)
    // ex:  10 * (3 -1 ) = 20 for 3rd page
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    // here limit and skip are mongodb functions
    return this;
  }
}

module.exports = ApiFeatures;
