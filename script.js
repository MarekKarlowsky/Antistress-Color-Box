(()=>{
    const colors = [
        '#e6ccff',
        '#400080',
        '#cce6ff',
        '#4da6ff',
        '#003366',
        '#ddffcc',
        '#e6e6ff',
        '#ffcce6',
        '#ff1a8c',
        '#b3f0ff',
        '#d9f2e6',
        '#99ff33',
        '#a6a6a6',
        '#ffff80',
        '#c299ff',
        '#ffd9b3',
        '#b3b3cc',
        '#c6538c',
        '#ffff99',
        '#0066ff',
        '#ff9900'
    ];
    const maxrange = colors.length;
    for(i=0; i<800;i++){
        let colornumber = Math.floor(Math.random() * maxrange);
        let colored_box = document.createElement('div');
        colored_box.style.backgroundColor = colors[colornumber];
        colored_box.classList.add('colored-box');
        colored_box.addEventListener('mouseover', (event)=>{
            let colornumber = Math.floor(Math.random() * maxrange);
            event.target.style.backgroundColor = colors[colornumber];
        })
        colored_box.addEventListener('mouseleave',(event)=>{
            let colornumber = Math.floor(Math.random() * maxrange);
            event.target.style.backgroundColor = colors[colornumber];
        })
        document.getElementById('box-holder').append(colored_box);
    }
})();

