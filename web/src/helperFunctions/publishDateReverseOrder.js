const authDescOrder = (data) =>
  data.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

export default authDescOrder;
