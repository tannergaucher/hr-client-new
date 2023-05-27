const { AWS_ASSOCIATE_ID } = require("./constants");

function getAmazonAffiliateLink(ASIN) {
  return `https://www.amazon.com/gp/product/${ASIN}/?tag=${AWS_ASSOCIATE_ID}`;
}

module.exports = getAmazonAffiliateLink;
