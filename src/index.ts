const _justify = (s: string, w: number, style: "left" | "right" | "center", fillChar = " ") => {
    if (fillChar.length > 1) return console.error("The fill character must be exactly one character long")
    let lPadding: number, rPadding: number
    switch (style) {
        case "left":
            rPadding = w > s.length ? w - s.length : 0
            break
        case "right":
            lPadding = w > s.length ? w - s.length : 0
            break
        case "center":
            if (w > s.length) {
                lPadding = Math.floor((w - s.length) / 2)
                rPadding = w - s.length - lPadding
            }
            break
    }
    lPadding ??= 0
    rPadding ??= 0
    return [fillChar.repeat(lPadding), s, fillChar.repeat(rPadding)].join("")
}

export const ljust = (s: string, w: number, fillChar = " ") => {
    return _justify(s, w, "left", fillChar)
}

export const rjust = (s: string, w: number, fillChar = " ") => {
    return _justify(s, w, "right", fillChar)
}

export const center = (s: string, w: number, fillChar = " ") => {
    return _justify(s, w, "center", fillChar)
}

export const justify = {ljust, rjust, center}
