export const ljust = (s: string, w: number, fillChars = "") => {
    const rPadding = w > s.length ? w - s.length : 0
    return s + fillChars.repeat(rPadding)
}

export const rjust = (s: string, w: number, fillChars = "") => {
    const lPadding = w > s.length ? w - s.length : 0
    return fillChars.repeat(lPadding) + s
}

export const center = (s: string, w: number, fillChars = "") => {
    if (w <= s.length) return s
    const lp = Math.floor((w - s.length) / 2)
    const rp = w - s.length - lp
    return fillChars.repeat(lp) + s + fillChars.repeat(rp)
}

export const justify = {ljust, rjust, center}
