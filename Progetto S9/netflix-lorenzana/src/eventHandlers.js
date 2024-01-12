// eventHandlers.js
export const handlePosterClick = (poster) => {
    poster.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
  
export const handlePosterHover = (poster, isHovered) => {
    poster.style.transform = isHovered ? 'scale(1.2)' : 'scale(1)';
    poster.style.transition = 'transform 0.3s ease';
};
  
export const handleScroll = (scrollAmount, refs) => {
    const { container } = refs;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
};
  