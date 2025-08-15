export default function AppFooter() {
  return (
    <footer
      id="app-footer"
      className="bg-primary text-primary-foreground py-12"
    >
      <div className="container mx-auto px-4">
        <hgroup className="text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Law Office KHO & ASSOSITE
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Partner Legal Terpercaya
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <span>© 2025 Law Office KHO & ASSOSITE</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
        </hgroup>
      </div>
    </footer>
  );
}
