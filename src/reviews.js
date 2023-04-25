
let reviews = [];
(function() {
    new CreateReview("This is a great place to eat. I love the food and the atmosphere. The staff is very friendly and helpful. I would recommend this place to anyone." , "Mark Zuckerburg" , "12/12/2019"),
    new CreateReview("I never thought I'd find a restaurant that combines my two loves: programming and food. The Java Chip Cookies were a perfect balance of sweet and java. The Node Noodles were spicy and delicious. The atmosphere is very comfortable and the decor is on point. Definitely check this place out if you're a programmer or a foodie or both!" , "Linux Torvalds" , "15/11/2022"),
    new CreateReview("I love this place! The food is amazing and the staff is super friendly. I would definitely recommend this place to anyone who loves food and programming!" ,"Chris Wanstrath" , "12/2/2022")
})();
    

function CreateReview(text , author , date) {
    this.text = text;
    this.author = author;
    this.date = date;
    reviews.push(this);
}
CreateReview.prototype.createReview = function() {
    let div = document.createElement('div');
    div.className = 'review';
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p.textContent = this.text;
    p2.textContent = this.author;
    p3.textContent = this.date;
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    return div;
}

export default reviews;