function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
function header_setup(array) {
    links = document.getElementsByClassName('header_links')[0]
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        link = document.createElement('a')
        link.classList.add('header_link','header_link:'+element[0])
        link.innerHTML = element[0]
        link.href = element[1]
        links.appendChild(link)  
}   }
// // // // // // // // // // // // // // // // 
header = [
    ['About','/about/'],
    ['Projects','/projects/']
]
header_setup(header)
// // // // // // // // // // // // // // // // 
function header_active(name){ document.getElementsByClassName('header_link:'+name)[0].classList.add('header_active_link') }
function post_loader(array, type){
    for (let i = 0; i < array.length; i++) {
        const data = array[i];
    
        post_div = document.createElement('div')
        post_div.classList.add('post')
    
        post_header = document.createElement('div')
        post_header.classList.add('post_head')
    
        post_title = document.createElement('span')
        post_title.innerHTML = "# "+data.title 
        post_title.classList.add('post_title')
        post_header.appendChild(post_title)
        if (type == 'story'){
            post_time = document.createElement('span')
            post_time.innerHTML = data.time
            post_time.classList.add('post_time')
            post_header.appendChild(post_time)
        }
        post_div.appendChild(post_header)
    
        post_text = document.createElement('div')
        post_text.innerHTML = data.text
        post_text.classList.add('post_text')
        post_div.appendChild(post_text)
        if (type == 'project'){
            post_urls = document.createElement('div')
            post_urls.classList.add('post_end_urls','post_text')
            for (let j = 0; j < data.urls.length; j++) {
                const url_data = data.urls[j];
                url = document.createElement('a')
                url.href = url_data[1]
                url.innerHTML = url_data[0]
                url.classList.add('post_end_url')
                post_urls.appendChild(url)
            }
            post_div.appendChild(post_urls)
        }
        if (data.img != false){
            post_image = document.createElement('img')
            post_image.src = data.img
            post_image.classList.add('post_image')
            post_div.appendChild(post_image)
        }
        document.getElementsByClassName('main')[0].appendChild(post_div)    
}   }
function title_add(name){
    document.getElementsByClassName('header_text')[0].innerHTML = document.getElementsByClassName('header_text')[0].innerHTML  + ' • ' + name
    document.getElementsByTagName('title')[0].innerHTML = document.getElementsByTagName('title')[0].innerHTML  + ' • ' + name
    
}

