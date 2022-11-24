let productPreviewContainer = document.querySelector('.products-preview-container');
let prodcutPreview = productPreviewContainer.querySelectorAll('.product-preview');

document.querySelectorAll('.products .slide .btn').forEach(detailBtn =>{
    detailBtn.onclick = () =>{
        productPreviewContainer.style.display = 'block';
        let name = detailBtn.getAttribute('data-product');
        prodcutPreview.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
        preview.style.display = 'flex';
        };
        });
    };
    });

    document.querySelectorAll('.products-preview-container .product-preview .bi-x-circle').forEach(close =>{
    close.onclick = () =>{
        productPreviewContainer.style.display = 'none';
        prodcutPreview.forEach(closePreview =>{
        closePreview.style.display = 'none';
        });
    };
    });

    var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides: true,
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        991: {
        slidesPerView: 3,
        },
    },
    });
    var swiper = new Swiper(".reviews-slider", {
        loop:true,
        spaceBetween: 20,
        grabCursor:true,
        centeredSlides: true,
        breakpoints: {
            0: {
            slidesPerView: 1,
            },
            768: {
            slidesPerView: 2,
            },
            991: {
            slidesPerView: 3,
            },
        },
    });