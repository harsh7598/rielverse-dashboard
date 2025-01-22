
export const YYYY_MM_DD_DATE_FORMAT = (value: Date) => {
    const date = new Date(value);
    return date.toISOString().split('T')[0];
}
