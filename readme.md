Week 2: This is assignment 2 for CS601
Name: Vincent Nguyen

I. My assignment 1 is about my biography which includes 5 pages such as Home page, Personal life and Interests page, Education page,
professional page and contact page. But actually there can split to be 6 pages as I combined Personal life and Interest to be 1 page.

II. Run Program.
    1. Download zip file and unzip it.
    2. Open the unzip folder using Vs Code.
    3. Click to any html file to open, and click to Go Live in the left conner of Vs Code if you instal Live Server extension.
    4. Page will be loaded and you can switch to any pages in the navigation bar by clicking into it.

III. Summary.
    - This week I have styled all of my pages using css. This is my first time doing about CSS, so I put all of my effort into (It's around more than 60 hours for it). I used variety CSS properties across my pages such as grid, flexbox, @media query, #keyframe, position, float along with the others like color, font, border, background ect.
    - i have total 6 css style sheets: globalstyles.css for header and footer, responsive using @media query and some common buttons style for all 5 pages. And 1 style sheet for each pages.
    - the globalstyles sheet is using to style the header and footer and background color and some buttons of all 5 files as well as doing @ media query ( change navigation position to column, font style, background color, height and margin, display none for some part of footer). I also do responsive for home page content by using @media query
        @media (max-width: 640px) {
        .navigation {
            flex-flow: column wrap;
            display: flex;
        }
        .logo {
            font-style: italic;
            color: #fd5949;
            margin-top: auto;
            margin-bottom: auto;
        }
        header {
            background-color: #B7C4CF;
        }
        .footer-c, .social{
            display: none;
        }
        footer {
            height: 8vh;
            background-color: #d6249f;
        }
    }

    - All html and css files has been validated and has no errors.
    - All of picture's source are in @2023 Vincent N. Alright reserved in the footer
VI. Pages detail
    - Along with all of requirements in the assignment, I have a lot of above and beyond things which I will list in detail section below

    1. Home pages
        - CSS properties: background, color, text algin, filter, flexbox, grid, transform, hover, @keyframe, animation, tex shadow, before, z-index etc.
        - Making picture and text animation. Try to hover into the buttons (contact and lets talk), you will see the cool things in it.
        - making responsive this page with max-width: 640px and (min-width: 641px and max-width:1007px) for font size, width, for header and text. so those screen will display like max size.
    
    2. Family page.
        -- CSS properties: background, color, text algin, filter, flexbox, grid, transform, hover, @keyframe, animation, tex shadow, before, z-index, opacity, hover, adding different font style, object fit, flex wrap etc.
        --The coolest thing of this page is the picture abum  (Five rectangle pictures in row below St John's introduction). When you hover into the picture, the picture will expand bigger.
        .st_pic {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        }
        /*Css for newfoundland pictures and hover to get full pictures */
        .st_pic img {
            width: 150px;
            height: 400px;
            object-fit: cover;
            transition: 0.5s ease-in-out;
            filter: sepia(0.5);
            border-radius: 10px;
        }
        .st_pic img:hover {
            width: 600px;
            filter: none;}
    3. Education and contact pages
        -- CSS properties: background, color, text algin, filter, flexbox, grid, transform, hover, @keyframe, animation, tex shadow, before, z-index, opacity, hover, adding different font style, object fit, flex wrap etc.
    5. Professional 
        -- CSS properties: background, color, text algin, filter, flexbox, grid, transform, hover, @keyframe, animation, tex shadow, before, z-index, opacity, hover, adding different font style, object fit, flex wrap etc.
        -- Two pictures are animation, it will be blur and transition into clear in a short moment.






------------------------------------





Week 1: This is assignment 1 for CS601
Name: Vincent Nguyen

I. My assignment 1 is about my biography which includes 5 pages such as Home page, Personal life and Interests page, Education page,
professional page and contact page. But actually there can split to be 6 pages as I combined Personal life and Interest to be 1 page.

II. Run Program.
    1. Download zip file and unzip it.
    2. Open the unzip folder using Vs Code.
    3. Click to any html file to open, and click to Go Live in the left conner of Vs Code if you instal Live Server extension.
    4. Page will be loaded and you can switch to any pages in the navigation bar by clicking into it.

III. Pages detail.
    1. Home page
        - It has 3 paragraphs of text based content.
        - It has 1 external hyperlink to my company website (It hyper under Schlumberger Limited.)
        - It has 1 image.
        - HTML 5 structural elements: <header>,<main>,<footer>,<nav>,<section>, <figure>, <figcaption>, <details>, <summary>,<aside>
        - Consistent navigation bar is created.

       +++++ There are some above and beyond the requirements which I included in this page: <em>, <i>, <b>, adding emoji, adding google map (where i am from), adding "Back to the top" function, using details and summary element, create "Follow my page!" button (it can pop up message but this week i can not use JS, so it only the symbol button.)

    2. Personal life & interests page.
        - It has three paragraphs of text based content.
        - It has 1 image.
        - It has one video using <video> element.
        - HTML 5 structural elements: <header>,<main>,<footer>,<nav>,<section>, <figure>, <figcaption>, <details>, <summary>, <aside>
        - Included one table with data.
        - Consistent navigation bar is created.

        +++++ There are some above and beyond the requirements in this page such as: <em>, <i>, <b>, adding "Back to the top" function, using details and summary element, adding a rating video features using <form>, <div>, <input>, <datalist>, <option> and <button>

    3. Education page:
        - It has four paragraphs of text based content.
        - It has 1 external hyper link to Boston university under MET Computer Science.
        - It has 1 image.
        - HTML 5 structural elements: <header>,<main>,<footer>,<nav>,<section>, <figure>, <figcaption>, <details>, <summary>, <aside>.
        - Include 1 list.
        - Consistent navigation bar is created.
        - One youtube video is embed using iframe.

        +++++ There are some above and beyond the requirements in this page such as: <i>, <b>, adding "Back to the top" function, using details and summary element, adding a completed courses features using <form>, <input type="checkbox>

    4. Professional page:
        - It has 3 paragraphs of text based content.
        - It has 2 images.
        - HTML 5 structural elements: <header>,<main>,<footer>,<nav>,<section>, <figure>, <figcaption>, <details>, <summary>, <aside>, <article>.
        - It has 1 list.
        - Consistent navigation bar is created.
        - One youtube video is embed using iframe.

        +++++ There are some above and beyond the requirements in this page such as: <i>, <b>, emoji, adding "Back to the top" function, using details and summary element.

    5. Contact page:
        - It has 1 paragraph of text based content.
        - It has 1 image.
        - HTML 5 structural elements: <header>,<main>,<footer>,<nav>,<section>, <figure>, <figcaption>, <details>, <summary>, <aside>.
        - Include 2 external hyperlink (Facebook and Linkedin).
        - Consistent navigation bar is created.

        +++++ There are some above and beyond the requirements in this page such as: <i>, <b>, emoji, adding "Back to the top" function, using details and summary element to create copyright feature, create "Book Meeting" feature (using <form>, <div>, <label>, <select>, <option>, <input type="date">, <input>, <datalist>, <button>), create "Contact Me" feature (using <form>, <input type= "text">, <input type = "email>, <textarea>, <input type ="submit">, also add placeholder into those), There is also has hyper link under "Email", When someone clicks into "Email", It will pop up the composing email window to send directly to my email (nvui@bu.edu).
