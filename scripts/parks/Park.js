export const Park = (parkObj) => {
    return `
    <div class="park">
            <p class="park__name">${parkObj.fullName}</p>
            <img src="${parkObj.images[0].url}">
    </div>
    `
}