const exploreItems = document.querySelectorAll('.explore-item');
const delicacies = document.querySelectorAll('.delicacy');

exploreItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

delicacies.forEach(delicacy => {
    delicacy.addEventListener('mouseenter', () => {
        delicacy.style.transform = 'translateY(-10px)';
    });

    delicacy.addEventListener('mouseleave', () => {
        delicacy.style.transform = 'translateY(0)';
    });
});
