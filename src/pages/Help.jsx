import HelpItem from "../components/sectionHelp/HelpItem";

const Help = () => {
  return (
    <div>
      <div className="bg-green-600 py-32 ">
        <h1 className="text-center text-5xl font-medium text-gray-50">
          Preguntas Frecuentes
        </h1>
      </div>

      <div className="pt-20 text-center">
        <p className="text-4xl flex flex-col font-bold">
          <span>¿Tienes Una Pregunta?</span>
          <span>Aquí Te Respondemos Algunas</span>
        </p>
      </div>
      <div className="px-16 text-gray-800 flex flex-col gap-y-4 py-20">
        <h2 className="font-bold text-4xl">Pedidos</h2>
        <div className="flex flex-col gap-y-2 pt-4">
          <HelpItem
            title="Tiempo de Entrega de los Pedidos"
            parrafo="Nuestros pedidos se despachan desde nuestro local en Agustín Codazzi. El tiempo de entrega oscila entre 2 y 5 días hábiles para ciudades principales, mientras que para ciudades secundarias varía de 5 a 10 días hábiles. Es importante tener en cuenta que estos plazos son estimados y pueden estar sujetos a variaciones debido a factores como la ubicación, eventos especiales (Black Friday, CyberLunes, Navidad, Temporada Escolar) y otros elementos logísticos, climáticos o de fuerza mayor."
          />
          <HelpItem
            title="Revisión del estado de un pedido "
            parrafo="Seguimiento de Pedidos:
            Si deseas verificar el estado de tu orden, sigue estos pasos:
            1. Dirígete a la sección de tu cuenta, ubicada en la fila superior derecha de nuestro sitio.
            2. Accede a 'Historial de Pedidos'.
            3. Haz clic en el botón 'Número de la Guía' y selecciona el número correspondiente.
   
            Adicionalmente, puedes realizar el seguimiento en www.servientrega.com utilizando el número de guía proporcionado.

            Es importante tener en cuenta:
            - Si tu pedido está en estado 'Procesando', estamos validando la información de tu medio de pago y datos personales para preparar el despacho.
            - En caso de que el estado sea 'En espera', es posible que falte completar el pago, especialmente al utilizar métodos como Baloto, Efecty, entre otros."
          />
          <HelpItem
            title="Confirmación de pedidos realizados "
            parrafo="Confirmación de Pedido y Despacho: Tras realizar tu compra en La Moderna, nuestro sistema te enviará automáticamente un correo de confirmación. Una vez despachado tu pedido, recibirás otro correo detallando la información del envío, proporcionándote los datos correspondientes para que puedas realizar el seguimiento adecuado."
          />
          <HelpItem
            title="Paso a paso de como se hace un pedido"
            parrafo="Compra Fácil en La Moderna: Realizar tu pedido es sencillo. Encuentra tus productos buscando en el navegador o explorando nuestras categorías. Haz clic en 'Comprar ahora', revisa tu carrito y finaliza la compra proporcionando tus datos y dirección. Elige el método de pago: tarjeta de crédito, débito o PSE. Recibirás confirmación y un número de seguimiento por correo electrónico. Tu pedido llegará a la dirección indicada. Ante cualquier duda, nuestro equipo de Servicio al Cliente está listo para ayudarte. ¡Así de fácil y rápido!"
          />
        </div>
        <h2 className="font-bold text-4xl pt-4">Formas de Pago</h2>
        <div className="flex flex-col gap-y-2 pt-4">
          <HelpItem
            title="Tarjetas de Crédito"
            parrafo="En nuestra Tienda Virtual, ofrecemos la opción de pago con tarjetas de crédito Visa, MasterCard, Diners o American Express. Para obtener detalles sobre la seguridad de las transacciones, te recomendamos consultar la información proporcionada por la pasarela de pago ePayco."
          />
          <HelpItem
            title="Tarjeta Débito "
            parrafo="En nuestra Tienda Virtual, aceptamos tarjetas de débito a través del sistema de ‘Pagos seguros PSE’. Es fundamental tener en cuenta lo siguiente:
            - Para utilizar este sistema, necesitarás una segunda clave proporcionada por tu banco. Durante el proceso de pago, serás redirigido a la página de tu entidad financiera para completar la transacción.
            - Algunos bancos implementan un sistema adicional de seguridad, como el envío de un PIN a través de mensaje de texto o correo electrónico. Debes autorizar este método de verificación con tu entidad bancaria para garantizar una mayor seguridad en las transacciones.
            - En caso de no haber autorizado previamente el sistema de envío de PIN, te recomendamos ponerte en contacto con tu entidad bancaria para habilitarlo y así aprovechar todas las medidas de seguridad disponibles."
          />
          <HelpItem
            title="Pago Contraentrega "
            parrafo="Aceptamos pagos en efectivo al momento de la entrega, brindándote la conveniencia de no depender de tarjetas de crédito o débito. Es fundamental tener en cuenta lo siguiente:
            - Asegúrate de contar con el dinero exacto en la dirección de entrega, ya que la transportadora no entregará el pedido sin recibir el pago exacto en efectivo.
            - Si el pedido consta de múltiples cajas, cada una tendrá una guía de despacho con el valor exacto a pagar. La suma total de las guías coincidirá con el valor total del pedido, incluidos fletes e impuestos.
            - La opción de pago contraentrega puede no estar disponible en todas las ciudades debido a restricciones de recaudo de la transportadora. Si no está disponible, la opción no aparecerá.
            - Únicamente se acepta dinero en efectivo, no se recibirán bonos, cupones de pago ni tarjetas de regalo. La transportadora no cuenta con datáfono.
            - Los pedidos con pago contraentrega se registran como aceptados en nuestro sistema y pasan de inmediato al proceso logístico para su despacho. Al elegir esta modalidad, adquieres un compromiso de pago al recibir el pedido."
          />
        </div>

        <h2 className="font-bold text-4xl pt-4">Productos</h2>
        <div className="flex flex-col gap-y-2 pt-4">
          <HelpItem
            title="Búsqueda de productos"
            parrafo="La moderna te ofrece la posibilidad de localizar los productos en su base de datos mediante el motor de búsqueda ubicado en la parte superior derecha de cada sección. Allí podrás escribir el nombre del producto que deseas localizar o puedes seleccionar una de las categorías. Cuando ejecutes cualquiera de las dos acciones, el sistema arrojará unas sugerencias de productos, y en la parte del centro de la página aparecerá un listado de filtros para hacer más eficiente la búsqueda."
          />
          <HelpItem
            title="Portafolio de productos"
            parrafo="La moderna cuenta con una gran variedad de productos. Podrás encontrar útiles escolares, papelería, arte y manualidades, entre muchos más."
          />
        </div>

        <h2 className="font-bold text-4xl pt-4">Información de Contacto</h2>
        <div className="flex flex-col gap-y-2 pt-4">
          <HelpItem
            title="Como contactarnos"
            parrafo="Contáctanos con nuestro equipo de Atención al Cliente. Estamos disponibles de lunes a sábados de 8:00 a.m. a 6:30 p.m. en el siguiente número telefónico:
            Desde Colombia: (+57) 301 4782097
            También puedes escribirnos a través del formulario de contacto.
            Visítanos en nuestro punto de venta ubicado en la Municipio de Agustín Codazzi, en la siguiente dirección:
            Carrera 11a No. 24a-40
            ¡Estamos aquí para ayudarte en todo lo que necesites en artículos de papelería!
            "
          />
          <HelpItem
            title="¿Como puedo llegar a la Moderna?"
            parrafo="Para dirigirte a nuestra tienda, puedes elegir entre diversos medios de transporte. Recomendamos el uso de herramientas como Waze o Google Maps para encontrar la ruta más eficiente y adecuada a tus necesidades."
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
