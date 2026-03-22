export interface ExperienceResult {
  formatted: string;
  yearsAsNumber: number;
}

export function calculateExperience(startDateStr: string, endDateStr: string = "Present"): ExperienceResult {
  const parseDate = (dateStr: string) => {
    if (!dateStr || dateStr.toLowerCase() === "present") return new Date();
    
    // Check if format is DD/MM/YYYY
    const dateParts = dateStr.trim().split("/");
    if (dateParts.length === 3) {
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // 0-indexed month
      const year = parseInt(dateParts[2], 10);
      return new Date(year, month, day);
    }

    // Fallback for formats like "Jan 2024"
    const parsed = new Date(`${dateStr} 1`);
    if (isNaN(parsed.getTime())) return new Date();
    return parsed;
  };

  const start = parseDate(startDateStr);
  const end = parseDate(endDateStr);

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) + 1; // +1 to count both starting and ending months fully

  if (totalMonths <= 0) {
    return { formatted: "0 Months", yearsAsNumber: 0 };
  }

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  let formatted = "";
  if (totalMonths < 12) {
    formatted = `${totalMonths} Month${totalMonths !== 1 ? "s" : ""}`;
  } else if (remainingMonths === 0) {
    formatted = `${years} Year${years !== 1 ? "s" : ""}`;
  } else if (remainingMonths >= 6) {
    formatted = `${years}.5+ Years`;
  } else {
    formatted = `${years}+ Year${years !== 1 ? "s" : ""}`;
  }

  let yearsAsNumber = years;
  if (remainingMonths >= 6) yearsAsNumber += 0.5;

  return { formatted, yearsAsNumber };
}

export function formatDateForDisplay(dateStr: string): string {
    if (!dateStr || dateStr.toLowerCase() === "present") return "Present";
    const dateParts = dateStr.trim().split("/");
    if (dateParts.length === 3) {
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1;
      const year = parseInt(dateParts[2], 10);
      const date = new Date(year, month, day);
      return date.toLocaleDateString("en-US", { month: 'short', year: 'numeric' });
    }
    return dateStr;
}

