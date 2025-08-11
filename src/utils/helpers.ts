export function formatTime(date: Date): string {
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
}

export async function fetchUrl(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error(error.message);
  }
}

