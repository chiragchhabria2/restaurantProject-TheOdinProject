import menuItems from "./menu.js";
import reviews from "./reviews.js";
import './style.css';
(function() {
    let contentDiv = document.getElementById('content');
    let documentBody = document.body;

    function loadHeaderAndFooter() {
        let header = createHeader();
        let footer = createFooter();
        appendAllElementsToParent(documentBody, header, footer);
        attachEventListenersToButtons();
    }
    loadHeaderAndFooter();
    // Utility functions
    function addElementsToContentDiv(...args) {
        args.forEach((element) => {
            contentDiv.appendChild(element);
        });
    }
    function removeAllElementsFromContentDiv() {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }
    function createParagraphWithInnerHTML(text) {
        let p = document.createElement('p');
        p.innerHTML = text;
        return p;
    }
    function createParagraphWithTextContent(text) {
        let p = document.createElement('p');
        p.textContent = text;
        return p;
    }
    function createDivWithID(text) {
        let div = document.createElement('div');
        div.id = text;
        return div;
    }
    function createMultipleDivs(num , className= "") {
        let divs = [];
        for (let i = 0; i < num; i++) {
            let div = document.createElement('div');
            if (className) {
                div.classList.add(className);
            }
            
            divs.push(div);
        }
        return divs;
    }
        
    
    function createButton(text) {
        let button = document.createElement('button');
        button.textContent = text;
        return button;
    }
    function createImage(src) {
        let img = document.createElement('img');
        img.src = src;
        return img;
    }
    function appendAllElementsToParent(parent, ...args) {
        args.forEach((element) => {
            parent.appendChild(element);
        });
    }
    function addClassToElements(className, ...args) {
        args.forEach((element) => {
            element.classList.add(className);
        });
    }

    // Main functions
    function createHeader() {
        let header = document.createElement('header');
        let h1 = document.createElement('h1');
        h1.textContent = 'The Code Cafe';
        header.appendChild(h1);
        let h2 = document.createElement('h2');
        h2.textContent = 'Where every byte is delicious!';
        header.appendChild(h2);
        let homeButton = createButton('Home');
        homeButton.id = 'homeButton';
        let menuButton = createButton('Menu');
        menuButton.id = 'menuButton';
        let reviewsButton = createButton('Reviews');
        reviewsButton.id = 'reviewsButton';
        addClassToElements('headerButton', homeButton, menuButton, reviewsButton);
        let headerButtons = createDivWithID("headerButtons")
        
        appendAllElementsToParent(headerButtons, homeButton, menuButton, reviewsButton);
        appendAllElementsToParent(header, headerButtons);
        
        return header;
    }
    function createFooter() {
        let footer = document.createElement('footer');
        
        let contactDiv = createDivWithID('ContactUs');
        let p = createParagraphWithInnerHTML(`Contact us at <a href = 'https://github.com/chiragchhabria2' target = '_blank'>chiragchhabria2</a> `);
        contactDiv.appendChild(p);
        let addressDiv = createDivWithID('Address');
        addressDiv.textContent = `Address : Hopefully somewhere in the cloud`
        appendAllElementsToParent(footer, contactDiv, addressDiv,);
        
        return footer;
    }

    function createHomeContent() {
        let homeContent = createDivWithID("homeContent");
      
        let homeText1 = createParagraphWithInnerHTML(`Welcome to <span class = "codeCafe">Code Cafe </span>,the restaurant where every byte is delicious! Try our React Rice Bowl, it's so good, it'll make you want to write more code! Or how about our Python Pizza , the perfect pick-me-up for those late-night coding sessions?  We use the freshest ingredients in our dishes, sourced straight from the cloud `);
        
        let homeText2 = createParagraphWithInnerHTML(`At <span class = "codeCafe">Code Cafe </span>,we're all about bringing the tech community together over good food and good humor. So whether you're a full-stack developer or a beginner coder, come join us for a meal and some laughs. Our servers aren't just serving food, they're serving up a side of witty jokes too!`);

        let homeText3 = createParagraphWithInnerHTML(`Got questions or want to make a reservation? No problem, our developers are standing by to help you out. Just give us a call or shoot us an email and we'll get you set up faster than a recursive function.`)

        let homeText4 = createParagraphWithInnerHTML(`Check out our menu and customer reviews for a taste of what's in store at <span class="codeCafe">Code Cafe </span>. Our food won't give you a syntax error, but it might give you a food coma.`);
        appendAllElementsToParent(homeContent, homeText1 , homeText2 , homeText3 , homeText4);
        return homeContent;
    }
    function createMenuContent() {
        let menuContent = createDivWithID("menuContent");
        let menuItemsDivs = createMultipleDivs(menuItems.length, "menuItem");
       
        appendAllElementsToParent(menuContent , ...menuItemsDivs);
        for (let i = 0; i < menuItemsDivs.length; i++) {
            createMenuItemContent(menuItemsDivs[i], menuItems[i]);
            
        }
        
        return menuContent;
    }
    function createMenuItemContent(menuItemDiv , menuItem) {
        let menuItemImage = createImage(menuItem.image);
        let menuItemName = createParagraphWithTextContent(menuItem.name);
        let menuItemDescription = createParagraphWithTextContent(menuItem.description);
        let menuItemPrice = createParagraphWithTextContent(menuItem.price + " $");
        appendAllElementsToParent(menuItemDiv, menuItemImage, menuItemName, menuItemDescription, menuItemPrice);

    }
    function createReviewsContent() {
        let reviewsContent = createDivWithID("reviewsContent");
        let allReviews = [];
        reviews.forEach((review) => {
           allReviews.push(review.createReview())
        });
        appendAllElementsToParent(reviewsContent, ...allReviews);
        return reviewsContent;
    }
    
    function attachEventListenersToButtons(){
        let homeButton = document.getElementById('homeButton');
        let menuButton = document.getElementById('menuButton');
        let reviewsButton = document.getElementById('reviewsButton');

        homeButton.addEventListener('click', () => {
            removeAllElementsFromContentDiv();
            addElementsToContentDiv(createHomeContent());
        });
        homeButton.click();
        menuButton.addEventListener('click', () => {
            removeAllElementsFromContentDiv();
            addElementsToContentDiv(createMenuContent());
        }
        );
        reviewsButton.addEventListener('click', () => {
            removeAllElementsFromContentDiv();
            addElementsToContentDiv(createReviewsContent());
        }
        );
    }
})()