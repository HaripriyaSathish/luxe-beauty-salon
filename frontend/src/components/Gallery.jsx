function Gallery({ images }) {
  if (!images || images.length === 0) return null

  return (
    <section id="gallery" className="border-t border-[var(--color-border)] bg-[var(--color-secondary)]/20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-[var(--color-foreground)]">
            ✨ OUR WORK
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            A look inside the studio
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-muted-foreground)]">
            Real transformations, signature finishes and the calm space we created for you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {images.map((img) => (
            <div key={img.id} className="gallery-item">
              <img src={img.image} alt={img.caption || 'Gallery image'} />
              {img.caption && (
                <div className="gallery-caption-overlay">
                  <p className="gallery-caption-text">{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery