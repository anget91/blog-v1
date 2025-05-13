// src/components/Bloque.tsx

import MarkdownRendererText from "@/lib/MarkdownRendererText";

export function Bloque({ bloque }: { bloque: any }) {
  return (
    <div className=" mb-2">
      <div className="py-1 rounded-lg bg-white ">
        {bloque.tipo === "texto" && (
          <MarkdownRendererText contenido={bloque.contenido} />
        )}

        {bloque.tipo === "imagen" && (
          <div className="mt-2">
            <img
              src={bloque.contenido}
              alt={bloque.alt}
              className="rounded max-w-full"
            />
            {bloque.alt && (
              <p className="text-sm text-gray-500 mt-1 italic">{bloque.alt}</p>
            )}
          </div>
        )}
      </div>

     
    </div>
  );
}
