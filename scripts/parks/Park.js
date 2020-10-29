export const Park = (parkObj) => {
    return `
    <div class="park">
            <p class="park__name"><h3>${parkObj.fullName}</h3></p>
            <p class="park__image">${parkObj.images[0]}</p>
    </div>
    `
}