class template{
    
    header(tname){
        return ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${tname}</title>
            <link rel="stylesheet" href="style.css">
        
        </head>
        <body>
            <header>
                <a href="My Application">${tname}</a>
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
        
            <section>`;
    }
}

let app=new template;

document.write(app.header("hgfdjg"));