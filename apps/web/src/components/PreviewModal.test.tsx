import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { PreviewModal } from './PreviewModal';

describe('PreviewModal iframe sandbox', () => {
  it('keeps srcDoc previews script-capable without same-origin access', () => {
    const markup = renderToStaticMarkup(
      <PreviewModal
        title="Design system"
        views={[{ id: 'showcase', label: 'Showcase', html: '<html><body>Preview</body></html>' }]}
        exportTitleFor={() => 'showcase'}
        onClose={() => {}}
      />,
    );

    expect(markup).toContain('sandbox="allow-scripts"');
    expect(markup).not.toContain('allow-same-origin');
  });
});
