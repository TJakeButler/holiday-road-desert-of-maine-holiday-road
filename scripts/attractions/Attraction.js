export const Attraction = (attractionObj) => {
    return `
    <div class="attraction">
        <p class="attraction__name">${attractionObj.name}
            <button id="detail--${attractionObj.id}" type="button">Details</button>
        </p>
    </div>
                `
}