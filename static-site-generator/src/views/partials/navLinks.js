module.exports = (previous, next) => {
    const prevLink = (previous) ? `prev: <a href=/${previous.filepath}>${previous.title}</a>` : '';
    const nextLink = (next) ? `next: <a href=/${next.filepath}>${next.title}</a>` : '';
    return (
        `<div>
            ${prevLink}
            ${nextLink}
        </div>`
    )
}
