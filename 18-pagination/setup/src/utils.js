const paginate = (followers) => {
    const itemsPerPage = 12;
    const newFollowers = new Array(Math.ceil(followers.length / itemsPerPage))
      .fill()
      .map(_ => followers.splice(0, itemsPerPage));
      
    return newFollowers
    
}

export default paginate
