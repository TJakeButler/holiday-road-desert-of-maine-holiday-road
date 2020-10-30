export const Park = (parkObj) => {
    return `
    <div class="park">
            <p class="park__name">${parkObj.fullName}
                <button id="detail--${parkObj.id}" type="button">Details</button>
                </p>
                </div>
                `
}