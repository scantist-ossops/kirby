<?php

namespace Kirby\Cms;

use PHPUnit\Framework\TestCase;

/**
 * @coversDefaultClass \Kirby\Cms\PluginAsset
 */
class PluginAssetTest extends TestCase
{
	protected Plugin $plugin;
	protected string $fixture = __DIR__ . '/fixtures/plugin-assets';

	public function setUp(): void
	{
		$this->plugin = new Plugin('getkirby/test-plugin', [
			'root' => $this->fixture
		]);

		touch($this->fixture . '/assets/test.css', 1337000000);
	}

	/**
	 * @covers ::extension
	 */
	public function testExtension()
	{
		$asset = new PluginAsset(
			'test.css',
			$this->fixture . '/assets/test.css',
			$this->plugin
		);

		$this->assertSame('css', $asset->extension());
	}

	/**
	 * @covers ::filename
	 */
	public function testFilename()
	{
		$asset = new PluginAsset(
			'test.css',
			$this->fixture . '/assets/test.css',
			$this->plugin
		);

		$this->assertSame('test.css', $asset->filename());
	}

	/**
	 * @covers ::mediaHash
	 * @covers ::mediaRoot
	 * @covers ::mediaUrl
	 * @covers ::url
	 * @covers ::__toString
	 */
	public function testMedia()
	{
		$asset = new PluginAsset(
			'test.css',
			$this->fixture . '/assets/test.css',
			$this->plugin
		);

		$this->assertSame('3526409702-1337000000', $asset->mediaHash());
		$this->assertSame($this->plugin->mediaRoot() . '/3526409702-1337000000/test.css', $asset->mediaRoot());
		$this->assertSame($url = '/media/plugins/getkirby/test-plugin/3526409702-1337000000/test.css', $asset->mediaUrl());
		$this->assertSame($url, $asset->url());
		$this->assertSame($url, (string)$asset);
	}

	/**
	 * @covers ::modified
	 */
	public function testModified()
	{
		$asset = new PluginAsset(
			'test.css',
			$this->fixture . '/assets/test.css',
			$this->plugin
		);

		$this->assertSame(1337000000, $asset->modified());
	}

	/**
	 * @covers ::__construct
	 * @covers ::path
	 * @covers ::plugin
	 * @covers ::root
	 */
	public function testPathRoot()
	{
		$asset = new PluginAsset(
			$path = 'test.css',
			$root = $this->fixture . '/assets/test.css',
			$plugin = $this->plugin
		);

		$this->assertSame($path, $asset->path());
		$this->assertSame($plugin, $asset->plugin());
		$this->assertSame($root, $asset->root());
	}

	/**
	 * @covers ::publish
	 */
	public function testPublish()
	{
		$asset = new PluginAsset(
			'test.css',
			$this->fixture . '/assets/test.css',
			$this->plugin
		);

		$this->assertFileDoesNotExist($asset->mediaRoot());
		$asset->publish();
		$this->assertFileExists($asset->mediaRoot());
		unlink($asset->mediaRoot());
	}
}
