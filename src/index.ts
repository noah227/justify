export const ljust = (s: string, w: number, fillChar = " ") => {
    const rPadding = w > s.length ? w - s.length : 0
    return s + fillChar.repeat(rPadding)
}

export const rjust = (s: string, w: number, fillChar = " ") => {
    const lPadding = w > s.length ? w - s.length : 0
    return fillChar.repeat(lPadding) + s
}

export const center = (s: string, w: number, fillChar = " ") => {
    if (w <= s.length) return s
    const lp = Math.floor((w - s.length) / 2)
    const rp = w - s.length - lp
    return fillChar.repeat(lp) + s + fillChar.repeat(rp)
}

export const justify = {ljust, rjust, center}
