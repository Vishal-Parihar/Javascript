// const coding = ["js","py","c++","java"]
// const val = coding.forEach( (item) =>{
    //     console.log(item);                                             does not return values
    //     return item
    // })
    
    

    //filter - The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

    const myNums = [1,2,3,4,5,6,7,8,9,10]
    // const newNum = myNums.filter( (num) => num >5)             #implicit functions
    const newNum = myNums.filter( (num) =>{
        return num > 4                        //when scope is expanded {} ,return statement is must  #explicit functions
    })
    // console.log(newNum);


    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];

    let userBooks = books.filter( (bk) => bk.genre === 'History')
      userBooks = books.filter( (bk) => {
        return bk.publish >=1995 && bk.genre === 'History'})
      console.log(userBooks);