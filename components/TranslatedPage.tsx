import { ReactNode } from 'react';
import { useI18n } from '../lib/useI18n';

interface TranslatedPageProps {
  children: (t: (key: string) => any) => ReactNode;
}

export function TranslatedPage({ children }: TranslatedPageProps) {
  const { t } = useI18n();
  return <>{children(t)}</>;
}
