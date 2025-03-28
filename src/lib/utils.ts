export function formatDate(dateString: string): string {
    const date = new Date(dateString)
  
    return date.toLocaleString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZoneName: "short",
    })
  }
  
  export function cn(...classes: (string | undefined | boolean)[]): string {
    return classes.filter(Boolean).join(" ")
  }
  
  