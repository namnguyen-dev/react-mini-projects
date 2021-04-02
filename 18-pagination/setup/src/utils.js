const paginate = (followers) => {
    const itemsPerPage = 11;
    const newFollowers = new Array(Math.ceil(followers.length / itemsPerPage))
      .fill()
      .map(_ => followers.splice(0, itemsPerPage));
      
    return newFollowers
    
}

export default paginate
