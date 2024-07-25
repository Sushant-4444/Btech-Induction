const face_options=document.querySelectorAll('.avatar-option-face');

face_options.forEach(option=>{
    option.addEventListener('click',(e)=>{
        document.querySelector('.Face').setAttribute('src',e.target.getAttribute('src'));
    });
});

const eye_options=document.querySelectorAll('.avatar-option-eye');

eye_options.forEach(option=>{
    option.addEventListener('click',(e)=>{
        document.querySelector('.Eyes').setAttribute('src',e.target.getAttribute('src'));
    });
});

const body_options=document.querySelectorAll('.avatar-option-body');

body_options.forEach(option=>{
    option.addEventListener('click',(e)=>{
        document.querySelector('.Body').setAttribute('src',e.target.getAttribute('src'));
    });
});

const option_buttons=document.querySelectorAll('.options-bar');

option_buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target.getAttribute('id'));
        const btnid=e.target.getAttribute('id').slice(0,4);
        console.log(btnid);
        // target=id.slice(0,4);
        const target_div=document.querySelector(`#${btnid}`);
        target_div.style.display='block';
        all_parts=document.querySelectorAll('.avatar-part');
        all_parts.forEach(part=>{
            if(part.getAttribute('id')!=btnid){
                part.style.display='none';
            }});

            
        });
});


create_avatar_button=document.querySelector('#createavatarbtn');

create_avatar_button.addEventListener('click',(e)=>{
    console.log('clicked');
    const scrolable_div=document.querySelector('.avatar');
    console.log(scrolable_div);
    // scroll to bottom
    scrolable_div.scrollTop = scrolable_div.scrollHeight;
});