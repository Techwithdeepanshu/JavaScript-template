function head(title) {
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <header>
        <a href="My Application">${title}</a>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Page1.html">Page1</a></li>
            <li><a href="Page2.html">Page2</a></li>
            <li><a href="Page3.html">Page3</a></li>
            <li><a href="Page4.html">Page4</a></li>
            <li><a href="Page5.html">Page5</a></li>
        </ul>
    </nav>

    <section>
    `)
    
}

function Post(plength) {
    let count=1;
    do{
        document.write(`
        <article class="post">
        <h1>Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iure itaque, a ab at voluptate necessitatibus porro quia! Necessitatibus quos maxime aliquam aspernatur commodi quisquam debitis, doloribus mollitia blanditiis. Labore officia eos nisi libero enim ad itaque. Recusandae sint unde, natus suscipit libero quidem temporibus perferendis accusantium sit eos obcaecati dicta maxime id magni deleniti voluptates iure rerum. Quaerat modi quae voluptates nihil molestias quia a? Provident explicabo eos soluta dicta. Ipsum architecto dolores animi minima expedita facilis in provident minus! Nisi eius odit autem, quis dolorum tenetur accusantium earum molestias quam rem doloribus tempore velit quasi facilis soluta nulla! Nemo officia blanditiis ullam corrupti consequatur labore non, exercitationem debitis est, accusantium aliquid sint nihil, natus nam distinctio quo ab porro officiis sed a minima. Nobis odio perspiciatis magnam doloribus minus! Ipsum ea sunt a incidunt. Inventore officia ducimus veritatis laboriosam voluptate necessitatibus. Ab autem ut illo blanditiis ea maxime temporibus dolore pariatur commodi consequuntur. Repellat facilis consequatur similique laborum fuga officia recusandae nisi tempore qui tempora autem, ratione nihil illum possimus dolorem. Totam neque quibusdam molestias dicta dolorum dignissimos, illum asperiores dolore provident itaque rem? Repellat voluptate iure impedit! Perspiciatis nobis cupiditate provident voluptatem deleniti tempora placeat expedita magni animi omnis laborum molestias aperiam quod qui ipsa sequi rem enim alias, voluptas ea! Blanditiis, aut quisquam? Rem placeat molestias esse iure animi id quibusdam quo debitis, quidem atque? Aspernatur exercitationem vel magni in cumque, soluta tempore ullam facere nobis perferendis? Et omnis aliquam aperiam qui nisi saepe ipsa, veritatis excepturi natus labore id necessitatibus vero voluptas fugit earum! Voluptatum ipsam itaque voluptatem neque? Deleniti dicta ea quod explicabo, aperiam, perspiciatis vero at, omnis praesentium natus ratione assumenda perferendis suscipit tenetur recusandae. Commodi perferendis quos perspiciatis minus dolore ipsam quis, sit aliquam eum repellat vero earum consequatur, inventore obcaecati quibusdam.</p>
    </article>
    `) 
         count++;
}
while(count<= plength);
}

function footer() {
    document.write(`
    </section>

    <footer>
        <h4>Copyright &copy; 2023 My Application</h4>
    </footer>
    `)
    
}

function image(ipath) {
    document.write(`
       <img src="img/${ipath}">
    `)
    
}

