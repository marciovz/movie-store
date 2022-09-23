interface PropsFormatDate {
  date: string
  dateStyle?: 'full' | 'long' | 'medium' | 'short'
}

export function formatDateInFull({
  date,
  dateStyle = 'long',
}: PropsFormatDate): string {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    dateStyle,
  }).format(new Date(date))
}
