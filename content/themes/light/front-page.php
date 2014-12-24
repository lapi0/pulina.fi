<?php
/**
 * 
 * Etusivun template.
 * Template Name: Front page
 *
 * @package light
 */

get_header(); ?>

<iframe src="http://peikko.us/irclog.php" frameborder="0" class="irclog"></iframe>

<div class="slide slide-irclog">
	<div class="shade"></div>

		<div class="container">

			<h2>Tämä on #pulina</h2>

			<p>Suoraviivaisempi kuin Twitter. Reaaliaikaisempi kuin Facebook. "Sosiaalisista medioista" se ensimmäinen. Tervetuloa irkkiin!</p>

			<p><a href="#mukaan" class="btn">Tule mukaan pulisemaan</a></p>

		</div>

<div class="rullaa-alas" data-0="opacity: 1" data-100="opacity: 0">
	<p><span class="fa fa-angle-down"></span></p>
</div>

</div>

<div class="slide slide-esittely firstcontainer">

	<div class="container">

		<h2>Paras paikka keskustelulle.</h2>
		<div class="type"><p data-list="Tuo tuossa yläpuolella on muuten suora lähetys.;Etkö usko?;Kannattais uskoa. Koska se on.;Pulinalla on parhaat jutut.;Pulinalla on myös parhaat tyypit.;Me miittaillaankin joskus.;Tutustu mehin, hopi hopi?;Voit olla anonyymi, jos haluat, ei haittaa.;Tule sellaisena kuin olet."></p></div>

		<p>Suomalainen keksintö, chattiverkosto IRC (puhekielessä "irkki") on ollut olemassa vuodesta 1988. Keskustelukanavia luotiin pääosin omista mielenkiinnonkohteista, esimerkiksi <code>#tietokoneet</code>.</p>

		<p>90-luvulla IRCistä kiinnostunut <i>rolle</i> huomasi, että kanavilla saatetaan keskustella ihan mistä vaan, vaikka kanavan aihe olisi rajattu johonkin piiriin. Nimellä ei siis oikeastaan ollut enää väliä ja rönsyileviä kanavia alkoi olla liikaa. Toisaalta ei myöskään ollut yhtä selkeää kanavaa kaikille, jossa sai jauhaa ihan mistä halusi.</p>

		<p>Näin <code>#pulina</code> sai alkunsa.</p>

		<p><a href="<?php echo get_page_link(6); ?>" class="btn">Lue lisää Pulinan historiasta</a></p>

	</div>

</div>


<div class="slide slide-linkit">

	<div class="container">

		<h2>Viimeisimmät linkit</h2>


<ul class="linkkilista">
<?php
require_once('inc/simplehtmldom/simple_html_dom.php'); 
$html = file_get_html('http://peikko.us/pulinalinkit/index.html');

// example: html->find('ul', 0)->find('li', 0);
$first_level_items = $html->find('ul', 0)->find('li', 0);
foreach($html->find('ul') as $ul) 
{
$i = 0;
       foreach($ul->find('li') as $li) 
       {
       if($i == 6) { break; }
       echo $li;
       $i++;
       }
}
?>
</ul>

			<div class="more">
				<p><a href="http://peikko.us/pulinalinkit">Lisää linkkejä &rsaquo;</a></p>
			</div>

	</div>

</div>

		<div class="slide slide-infograafi">
		
			<div class="container">
		
				<div class="wow fadeIn numero" data-wow-delay="0.22s">
					<span class="arvo meter_1"><?php $paikalla = file_get_html('http://peikko.us/pulina.html'); foreach($paikalla->find('.paikalla') as $numero) echo $numero; ?></span>
					<span class="asia">Paikalla nyt</span>
				</div>
		
				<div class="wow fadeIn numero" data-wow-delay="0.44s">
					<span class="arvo meter_2"><?php
$peak = file_get_html('http://peikko.us/peak.db');
$luku = explode('!!!',$peak);
$oikealuku = explode('@',$luku[1]);
$numero = $oikealuku[0];
echo $numero;
?></span>
					<span class="asia">yhtäaikainen käyttäjäennätys</span>
				</div>
		
				<div class="wow fadeIn numero" data-wow-delay="0.66s">
					<span class="arvo meter_3"><?php
$filu = file_get_html('http://peikko.us/statsit/pulina/index.html');
$bold = $filu->find('b');
$visitors = $bold[0];
echo $visitors; ?></span>
					<span class="asia">käyttäjää yhteensä</span>
				</div>
		
				<div class="wow fadeIn numero" data-wow-delay="0.88s">
					<span class="arvo meter_4"><?php
$filu = file_get_html('http://peikko.us/statsit/pulina/index.html');

$bold = $filu->find('b');
$visitors = $bold[0];

preg_match('/Rivien yhteismäärä: (?P<digit>\d+)/', $filu, $matches);
$pulistumaara = $matches[1]; 
echo $pulistumaara; ?></span>
					<span class="asia">riviä pulistu</span>
				</div>
		
			</div>
		
		</div><!--/.slide-->

<div class="slide slide-miten slide-ohje slide-vaihe-yksi">

	<div class="container">
	
		<h2>Vaihe 1. Päätä nimimerkki._</h2>

		<p>Valitse helposti tunnistettava sinuun yhdistettävä nimimerkki. Kanavan ylläpitäjiä ovat esimerkiksi rolle ja mustikkasoppa. Irkissä nimimerkki näkyy pienemmyys-suuremmuus-sulkeiden sisällä näin: <code>&lt;rolle&gt;</code>. Käyttäjän koko tiedot näet komennolla <code>/whois rolle</code>. Näillä pääset jo pitkälle.</p>

	</div>

</div>

<div class="slide slide-miten slide-ohje slide-vaihe-kaksi">

	<div class="container">
	
		<h2>Vaihe 2. Yhdistä kanavalle._</h2>

		<p>Luulitko, että pitää vielä jotain säätää? <a href="http://pulina.stableservers.eu">Tästä</a> tai alta napista, sitten nimimerkin täydennys ja <code>Connect</code>. Kyllä on tehty irkkaaminen helpoksi nykyään.</p>

		<p><a href="http://pulina.stableservers.eu" class="btn">Boom, irkkiin!</a></p>

	</div>

</div>

<div class="slide slide-lopetus">

	<div class="container">
	
		<h2>Mitäs muuta?</h2>

		<p>No ei kai tässä sitten muuta kuin keskustelu käyntiin? Pulinan sivuilta löydät <a href="<?php echo get_page_link(6); ?>">tietoa kanavasta</a>, <a href="<?php echo get_page_link(25); ?>">Pulina-paidoista</a>, <a href="<?php echo get_page_link(21); ?>">komennoista</a>. Meillä on myös <a href="<?php echo get_page_link(1010); ?>">blogi</a>. Tavoitteena julkaista kuvagalleria, miittien tapaamissysteemi ja jotain muutakin hienoa. Sitten joskus.</p>

		<p>Sivut loi <a href="http://roni.laukkarinen.info">Rolle</a>.

	</div>

</div>

<?php get_footer(); ?>