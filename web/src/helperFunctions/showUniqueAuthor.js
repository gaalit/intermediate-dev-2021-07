const uniqueAuth = (data) => [...new Set(data.map((item) => item.author.name))];

export default uniqueAuth;
