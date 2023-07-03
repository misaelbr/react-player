import { Loader } from 'lucide-react'
import { useStore, useCurrentLesson } from '../zustand-store'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  const isLoading = useStore((store) => store.isLoading)

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        <span>Carregando...</span>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-4xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo &quot;{currentModule?.title}&quot;
      </span>
    </div>
  )
}
